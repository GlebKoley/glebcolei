interface Availability {
   days: string[];
   startTime: string;
   endTime: string;
}

interface ScheduleObject {
   id: number;
   isDefault: boolean;
   name: string;
   overrides: [];
   ownerId: number;
   timeZone: string;
   availability: Availability[];
}

interface Schedule {
   status: 'success';
   data: ScheduleObject[];
   startTime: string;
   endTime: string;
}

export const getCalComSchedule = async (): Promise<boolean> => {
   if (process.env.CAL_COM_API_KEY === undefined) return false;

   try {
      const res = await fetch('https://api.cal.com/v2/schedules', {
         method: 'GET',
         headers: {
            'cal-api-version': '2024-06-11',
            Authorization: process.env.CAL_COM_API_KEY,
         },
      });

      const { data }: Schedule = await res.json();

      const now = new Date();
      const day = now.toLocaleString('en', { weekday: 'long', timeZone: 'Europe/Chisinau' });
      const time = now.toLocaleTimeString('en', {
         hour12: false,
         hour: '2-digit',
         minute: '2-digit',
         timeZone: 'Europe/Chisinau',
      });

      const isAvailableTime = data[0].availability?.some((item) => {
         return item.days.includes(day) && item.startTime <= time && item.endTime >= time;
      });

      return isAvailableTime;
   } catch (err) {
      console.error('calcom schedule error', err);
      return false;
   }
};
