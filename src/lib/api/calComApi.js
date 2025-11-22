export const getCalComSchedule = async () => {
   try {
      const res = await fetch('https://api.cal.com/v2/schedules', {
         method: 'GET',
         headers: {
            'cal-api-version': '2024-06-11',
            Authorization: process.env.CAL_COM_API_KEY,
         },
      });

      const data = await res.json();
      if (data?.data?.lenght === 0) return false;

      const now = new Date();
      const day = now.toLocaleString('en', { weekday: 'long', timeZone: 'Europe/Chisinau' });
      const time = now.toLocaleTimeString('en', {
         hour12: false,
         hour: '2-digit',
         minute: '2-digit',
         timeZone: 'Europe/Chisinau',
      });

      const isAvailableTime = data?.data?.[0]?.availability?.some((item) => {
         return item.days.includes(day) && item.startTime <= time && item.endTime >= time;
      });

      return isAvailableTime;
   } catch (err) {
      console.error('calcom schedule error', err);
      return false;
   }
};
