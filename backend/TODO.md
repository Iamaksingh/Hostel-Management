cron job for midnight

```js
cron.schedule('0 0 * * *', async () => {
    console.log('Running data handling job at midnight...');

    // delete cleaning data at midnight
    await deleteDataMidnight();
});
```


for making session in the project
https://www.youtube.com/watch?v=sTHWNPVNvm8