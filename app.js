class Test{
    doSomething(){
        this.val = new Promise((resolve)=>{
            setTimeout( ()=>{
                resolve(5);
            }, 1000)
        });
        return this.val;
    }
}

const test = new Test();
(async function(){ 
    const result = await test.doSomething(); 
        console.log(result)
})()
