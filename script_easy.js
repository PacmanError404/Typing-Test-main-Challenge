let timer = document.getElementById("time_data");

for(let i=0;i<=59;i++){
    setTimeout(function(){
    timer.innerHTML = `0:${i}`;
    },(59-i)*1000);
}
// TIMER!!

arr_easy = ["The sun rose over the quiet town. Birds sang in the trees as people woke up and started their day. It was going to be a warm and sunny morning.","She walked to the store to buy some bread and milk. The shop was busy but she found what she needed quickly. On her way home, she saw a friend and waved.","The dog ran across the park chasing a ball. He was fast and loved to play. After a while, he got tired and lay down in the cool shade of a big oak tree.","I like to read books before I go to sleep. It helps me relax after a long day. My favorite stories are about adventure and travel to far away places.","The kitchen smelled of fresh coffee and toast. Mom was making breakfast while dad read the news. It was a normal morning in their small but cozy home.","We went to the beach last summer. The water was blue and the sand was warm. We built a big sand castle and looked for shells along the shore.","The cat sat on the window sill watching the rain. Drops fell down the glass one by one. She seemed happy to be inside where it was dry and warm.","My best friend lives next door to me. We play games together after school. Sometimes we ride our bikes around the block or sit and talk for hours.","Spring is my favorite time of year. Flowers start to bloom and the days get longer. I love to see the trees turn green again after the cold winter months.","The music played softly in the room. She closed her eyes and let the sounds wash over her. It was a simple song but it made her feel at peace."]

let rand = Math.floor(Math.random()*10);
document.getElementById("text").innerText =`${arr_easy[rand]}`;