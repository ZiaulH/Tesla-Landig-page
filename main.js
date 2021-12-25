const ms = document.getElementById("models");
const m3 = document.getElementById("model3");
const mx = document.getElementById("modelx");
const my = document.getElementById("modely");
const ct = document.getElementById("cybert");
const sr = document.getElementById("solarR");
const sp = document.getElementById("solarP");
const model = document.getElementById("model");
// const info = document.getElementById("info");

 

ms.onclick = function(){
    header.style.backgroundImage = "url('images/image-1.png')";
    model.innerHTML = "Model S";
    document.getElementById("info").innerHTML = "<div><h2>1.99s</h2><p>0-60 mph</p></div><div><h2>200 mph</h2><p>Top Speed</p></div><div><h2>396 mi</h2><p>Max Range</p></div><div><h2>10,20</h2><p>Peak Power</p></div><div><a href='#' class='btn'>Book Now</a></div> <div class='model' id='model'>Model S</div>";

}
m3.onclick = function(){
    header.style.backgroundImage = "url('images/image-2.png')";
    model.innerHTML = "Model 3"
    document.getElementById("info").innerHTML = "<div>                                     <h2>3.1s</h2><p>0-60 mph</p>                                                          </div>                                                                        <div>                                                                           <h2>358 mi</h2><p>Range (EPA est.)</p>                                                       </div>                                                                       <div><h2>AWD</h2><p>Dual Motor</p></div>                                       <div><a href='#' class='btn'>Book Now</a></div>                                     <div class='model' id='model'>Model 3</div>";
}
mx.onclick = function(){
    header.style.backgroundImage = "url('images/image-3.png')";
    model.innerHTML = "Model X";
    document.getElementById("info").innerHTML = "<div><h2>333 mi</h2><p>Range (EPA est.)</p></div><div><h2>2.5s</h2><p>0-60mph</p></div><div><h2>9.9s</h2><p>1/4 Miles</p></div><div><h2>10,20ph</h2><p>Peak Power</p></div><div><a href='#' class='btn'>Book Now</a></div> <div class='model' id='model'>Model X</div>";

}
my.onclick = function(){
    header.style.backgroundImage = "url('images/image-4.png')";
    model.innerHTML = "Model Y";
    document.getElementById("info").innerHTML = "<div><h2>76 cu ft</h2><p>Cargo Space</p></div><div><h2>330 mi</h2><p>Range (EPA est.)</p></div><div><h2>AWD</h2><p>Dual Motor</p></div><div><a href='#' class='btn'>Book Now</a></div> <div class='model' id='model'>Model Y</div>";
}
ct.onclick = function(){
    header.style.backgroundImage = "url('images/image-5.jpg')";
    model.innerHTML = "Cybertruck";
    document.getElementById("info").innerHTML ="<a href='#' class='btn'>Order Now</a></div> <div class='model' id='model'>Cybertruck</div>";
}
sr.onclick = function(){
    header.style.backgroundImage = "url('images/image-6.png')";
    model.innerHTML = "Solar Roof"
    document.getElementById("info").innerHTML = "<div><img src='images/sloar-panel.png'><p>Beautiful Solar</ps><p>Without Compromise</p></div><div><h2>25-Year</h2><p>Tile Warranty</p></div><div><h2>24/7</h2><p>Outage Protection</p></div><div><a href='#' class='btn'>Order Now</a></div>";

}
sp.onclick = function(){
    header.style.backgroundImage = "url('images/image-7.png')";
    model.innerHTML = "Solar Panels";
    document.getElementById("info").innerHTML = "<div><img src='images/sloar-panel.png'><p>Convert Sunlight</p><p>to Energy</p></div><div><h2>$</h2><p>Guaranteed Lowest</br>Price for Solar</p></div><div><h2>24/7</h2><p>Energy</br>Monitoring</p></div><div><a href='#' class='btn'>Order Now</a></div>";
}