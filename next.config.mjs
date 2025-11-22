/** @type {import('next').NextConfig} */
const nextConfig = {
   basePath: '',
   output: 'export',
   env: {
      CAL_COM_API_KEY: process.env.CAL_COM_API_KEY,
   },
};

export default nextConfig;
