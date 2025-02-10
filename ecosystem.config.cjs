module.exports = {
  apps: [
    {
      name: "eliza-recoup-starter",
      script: "pnpm",
      args: "start",
      cron_restart: "0 */12 * * *",
      watch: false,
      autorestart: true,
    },
  ],
};
