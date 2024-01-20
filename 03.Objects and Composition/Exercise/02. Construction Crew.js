function constructionCrew(worker){

    let water=0;

if(worker.dizziness == true){
    water=worker.weight*0.1*worker.experience;
    worker.levelOfHydrated+=water;
    worker.dizziness=false;

}

return worker

}

console.log(constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  
  ));