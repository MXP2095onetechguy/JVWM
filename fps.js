/* const times = [];
window.fps = 0;


(() => {
 
    function refreshLoop() {
        window.requestAnimationFrame(() => {
            const now = performance.now();
        while (times.length > 0 && times[0] <= now - 1000) {
            times.shift();
        }
        times.push(now);
        window.fps = times.length;
        refreshLoop();
    });
    }
    refreshLoop();
    
    // output to console once per second
    setInterval(() => {console.log(fps);}, 1000)
})(); */