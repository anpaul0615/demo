export function getRandomValue(){
    return new Promise((resolve,reject)=>{
        const rendom = Math.random() * 10;
        return resolve(rendom);
    });
};