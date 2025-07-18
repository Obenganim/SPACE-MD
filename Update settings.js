require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAJI28lohWBdxUgQAAHEHAAAKAAAAY3JlZHMuanNvbpVU25KiSBD9l3rVGAQEwYiOWARUBGxQ8LYxDyUUl5ZLWRQgTvjvE*Rlph92Z3t5KqoyTp7MczJ*gKJMK2SiDkx*AEzSBlLUH2mHEZiCWR1FiIAhCCGFYApyKx7JyK+PXWektT8zMZL45W1fe+540sD4Qv0gtiaQ1*Un8BgCXJ+zNPgDoOXMkHRCM9fwZ0TjDyY87rwxEc50ZIdFJKe6sebZ*WbQVk*g0SPClKRFrOME5YjAzESdA1PyNfrQKuVBEmmtttBPzFLFRtJa5z1*K3e0ln0pcc543B7nxqH6Gn1NqOUT2s86YZfMHb2JRveBWScj+nw05md8l1+OucZqTKcf3+hXaVyg0AhRQVPafbnv3HpRb7VJ1d3J4oy9vXt0+NhmkHoma100ZabcrGeHtlvkyteIp64mSXe5wtmYdifpZC2ZG*U8a0DptUq8I2Hk5QLNUROPPxN3yIdXLv+n7*s5M7eVMTH0VbI8cRmx2mdbrIraYVsh53eWvbr6ATlt*S*Sv0n0YrJM4qik8QN9FRUrYb3JIeestiFtePEKyWBv36uD*5s+pDX5E0s5ikcNWUc7W4ErXOyX0vyc1LfUgdZmcmCzbDBfHy9sO78czQUd2xzZ7DkTZ7dooF7lZ*Y5ZmaDl7vLWHpo4WjD+BcrVp5eK7qgzgjBlH0MAUFxWlECaVoW*R3H80MAw2aLAoLoa3vBoi5C5KyUG2ajcJmF5lWypBd0Zg8Ox0KdOfPHub274f1x9ASGAJMyQFWFwmVa0ZJ0NqoqGKMKTP*+PgQFutE34fp0PDsEUUoq6hc1zkoYfqj68QiDoKwLuu2KQO0PiIDpp2tEaVrEVd*HuoAkSNIGqQmkFZhGMKvQrwoRQSGYUlKjX1OrlmHfeNbarnRl54AhyF8FScPe4zwvCPxYGIkiP2Unf1Xf2h4WYvytQBQMQfYWxo0n*EiY8GNZFIRRH9k*PH4x7AFDRGGaVWAKVFt8eZnYmm5OkCDZi4Wix4oaK+B3RR*WeGv9TCPc+C4rnkaO8mkny47gWGbsx14XzFsMa+8mb6zKJqz79A8gYAo2BeKuSh4dr65PzFUbzLituLMPm6ZdrBuTjbRabFlTDiKXYQ9tgy630Lw36HK*uubLfWmpPDSUmFiWtFxig1ebdqC6T322EDVpgD4n08cnrd2d08qd022eEvFQb650ctqMJsTMHbJbH7jDmblsOuzukvTUmUGZNeLAgxU85bRxRPWUaIccN4PNC7P2xunOTN5N+zo02fuySl*t1GvV*0Ypep39AvYK*rd2b8R7i40ew08Y79vkXyZy5rqiXNuMq7ci5+x3UeQNvK4r54YuFbPA3JOLFPnbiWbKPng8vg8BziCNSpL3Kw4nZYHAEJCy7i1rFFH5h1yqMjLU98IzWFHl9xh4aY4qCnMMpuxE4CSOFQT+LcohJV7CKgFTwMeOv7r0nu4UjLcU0o+pAkr*2d0FPH4CUEsBAhQDFAAACAgAkjbyWiFYF3FSBAAAcQcAAAoAAAAAAAAAAAAAAKSBAAAAAGNyZWRzLmpzb25QSwUGAAAAAAEAAQA4AAAAegQAAAAA',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '233553450663',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'Obenganim',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'false',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
