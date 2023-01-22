let logged = false;

let nymph_temp = [];
let type_temp = [];
let age_temp = []
let behaviour_temp = [];
let food_temp = [];
let routine_temp = [];
let ppo_temp = [];

function logger() { // asks for behaviour

    const nymph = prompt("Enter name of bird:");
    const type = prompt("Bird type. Nymph, Budgie or Parakeet");
    type_temp.push(type);
    const age = prompt("The "+String(type_temp[0])+"'s age?");

    if (nymph == null) {
        alert("NYMPH TECH AUTO DETECT: NO NAME GIVEN");
        location.reload();
    }

    else {
        nymph_temp.push(nymph);
    }

    if (type == null) {
        alert("NYMPH TECH AUTO DETECT: INVALID BIRD TYPE");
        location.reload();
    }
    else {
        type_temp.push(type);
    }

    if (age == null) {
        alert("NYMPH TECH AUTO DETECT: INVALID AGE");
        location.reload();
    }
    else {
        age_temp.push(age);
    }

    const behaviour_box = document.createElement("textarea");
    behaviour_box.setAttribute("id","behaviour_box");
    behaviour_box.setAttribute("cols","50");
    behaviour_box.setAttribute("rows","10");
    behaviour_box.setAttribute("style","left: 20.5cm; position: relative;");
    behaviour_box.innerHTML = "Type the behaviour of the bird during the day here";
    behaviour_box.setAttribute("onclick","delete_textarea_content(document.getElementById('behaviour_box'))");

    const submit_button1 = document.createElement("h4");
    submit_button1.textContent = "Submit";
    submit_button1.setAttribute("id","submit_behaviour");
    submit_button1.setAttribute("style","font-size: 20px; position: relative; text-align: center;");
    submit_button1.setAttribute("onclick","behaviour_temp.push(document.getElementById('behaviour_box').value);    logger2();");

    document.body.appendChild(submit_button1);
    document.body.appendChild(behaviour_box); 
}

function logger2() { // gets behaviour, requests food 

    document.getElementById('submit_behaviour').remove();
    document.getElementById('behaviour_box').remove();

    let behaviour = behaviour_temp[0];
    
    const food_box = document.createElement("textarea");
    food_box.setAttribute("id","food_box");
    food_box.setAttribute("cols","50");
    food_box.setAttribute("rows","10");
    food_box.setAttribute("style","left: 20.5cm; position: relative;");
    food_box.innerHTML = "Type in everything the bird has eaten and drinken today.";
    food_box.setAttribute("onclick","delete_textarea_content(document.getElementById('food_box'))");

    const submit_button2 = document.createElement("h4");
    submit_button2.textContent = "Submit";
    submit_button2.setAttribute("id","submit_food");
    submit_button2.setAttribute("style","font-size: 20px; position: relative; text-align: center;");
    submit_button2.setAttribute("onclick","food_temp.push(document.getElementById('food_box').value);    logger3();");

    document.body.appendChild(submit_button2);
    document.body.appendChild(food_box); 

}

function logger3() { // gets food, requests routine

    document.getElementById('food_box').remove();
    document.getElementById('submit_food').remove();

    let food = food_temp[0];
    
    const routine_box = document.createElement("textarea");
    routine_box.setAttribute("id","routine_box");
    routine_box.setAttribute("cols","50");
    routine_box.setAttribute("rows","10");
    routine_box.setAttribute("style","left: 20.5cm; position: relative;");
    routine_box.innerHTML = "How was the birds routine today?";
    routine_box.setAttribute("onclick","delete_textarea_content(document.getElementById('routine_box'))");

    const submit_button3 = document.createElement("h4");
    submit_button3.textContent = "Submit";
    submit_button3.setAttribute("id","submit_routine");
    submit_button3.setAttribute("style","font-size: 20px; position: relative; text-align: center;");
    submit_button3.setAttribute("onclick","routine_temp.push(document.getElementById('routine_box').value);    logger4();");

    document.body.appendChild(submit_button3);
    document.body.appendChild(routine_box); 

}

function logger4() { // get routine of the bird, requests problems, positive, etc.

    document.getElementById('routine_box').remove();
    document.getElementById('submit_routine').remove();

    let routine = routine_temp[0];

    const ppo_box = document.createElement("textarea");
    ppo_box.setAttribute("id","ppo_box");
    ppo_box.setAttribute("cols","50");
    ppo_box.setAttribute("rows","10");
    ppo_box.setAttribute("style","left: 20.5cm; position: relative;");
    ppo_box.innerHTML = "P.P.O = Problems, Positive things, Other. Please report any problems, positive feedback and other inquiries about the bird here.";
    ppo_box.setAttribute("onclick","delete_textarea_content(document.getElementById('ppo_box'))");

    const submit_button4 = document.createElement("h4");
    submit_button4.textContent = "Submit";
    submit_button4.setAttribute("id","submit_ppo");
    submit_button4.setAttribute("style","font-size: 20px; position: relative; text-align: center;");
    submit_button4.setAttribute("onclick","ppo_temp.push(document.getElementById('ppo_box').value);    finalize();");

    document.body.appendChild(submit_button4);
    document.body.appendChild(ppo_box); 

}

function finalize() { // gets ppo and finishes things off

    document.getElementById('ppo_box').remove();
    document.getElementById('submit_ppo').remove();

    let ppo = ppo_temp[0];
    logged = true;
    
    document.getElementById("title1").remove();
    document.getElementById("title2").remove();


    const bird_name = document.createElement("p");
    bird_name.textContent = "Bird Name: "+ String(nymph_temp[0]);

    const bird_type = document.createElement("p");
    bird_type.textContent = "Bird Type: "+ String(type_temp[0]);

    const bird_age = document.createElement("p");
    bird_age.textContent = "Bird's Age: "+ String(age_temp[0]);

    const txt_behaviour = document.createElement("p");
    txt_behaviour.textContent = "Behaviour: "+ String(behaviour_temp[0]);

    const txt_food = document.createElement("p");
    txt_food.textContent = "Food: "+ String(food_temp[0]);

    const txt_routine = document.createElement("p");
    txt_routine.textContent = "Routine: "+ String(routine_temp[0]);

    const txt_ppo = document.createElement("p");
    txt_ppo.textContent = "P.P.O: "+ String(ppo_temp[0]);

    document.body.appendChild(bird_name);
    document.body.appendChild(bird_type);
    document.body.appendChild(bird_age);
    document.body.appendChild(txt_behaviour);
    document.body.appendChild(txt_food);
    document.body.appendChild(txt_routine);
    document.body.appendChild(txt_ppo);

}

function delete_textarea_content(textarea) {
    textarea.innerHTML = "";
}
