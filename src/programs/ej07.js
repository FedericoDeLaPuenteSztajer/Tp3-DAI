let num=1

const numInterval= setInterval(()=>{
    console.log(num)
    num++
}, 1000)

setTimeout(()=>{
    clearInterval(numInterval)
}, 11000)
