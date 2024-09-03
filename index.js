let totalCost=0
let totalCostEl=document.getElementById("totalCost")
let AllItems=document.getElementById("AllItems")
let allItems="Selected items:"
let costEl=document.getElementById("cost")
let IN=document.getElementById("in")






let ram1 =document.getElementById("ram-1")
document.getElementById('r1').style.visibility='hidden'
let ram2 =document.getElementById("ram-2")
document.getElementById('r2').style.visibility='hidden'
let ram3 =document.getElementById("ram-3")
document.getElementById('r3').style.visibility='hidden'
let c0=document.getElementById("c0")








function incrementRam1()
{
    ram1.innerText="Added Successfully"
    localStorage.setItem("Vengeance","10000")
    document.getElementById('r1').style.visibility='visible'
    removeButton()
    cart()
}
function incrementRam2()
{
    ram2.innerText="Added Successfully"
    localStorage.setItem("Vengeance-2","20000")
    document.getElementById('r2').style.visibility='visible'
    removeButton()
    cart()
}
function incrementRam3()
{
    ram3.innerText="Added Successfully"
    localStorage.setItem("Vengeance-3","30000")
    document.getElementById('r3').style.visibility='visible'
    removeButton()
    cart()
}











function removeR1()
{
    localStorage.removeItem("Vengeance")
    ram1.innerText="Add to your PC"
    document.getElementById('r1').style.visibility='hidden'
    cart()
}
function removeR2()
{
    localStorage.removeItem("Vengeance-2")
    ram2.innerText="Add to your PC"
    document.getElementById('r2').style.visibility='hidden'
    cart()
}
function removeR3()
{
    localStorage.removeItem("Vengeance-3")
    ram3.innerText="Add to your PC"
    document.getElementById('r3').style.visibility='hidden'
    cart()
}










function showcost()
{
    totalCost=0
    if(localStorage.getItem("Vengeance")!=null)
    {
        totalCost=totalCost+10000
    }
    if(localStorage.getItem("Vengeance-2")!=null)
    {
        totalCost=totalCost+20000
    }
    if(localStorage.getItem("Vengeance-3")!=null)
    {
        totalCost=totalCost+30000
    }
    if(localStorage.getItem("Geforce-GT-1")!=null)
    {
        totalCost=totalCost+18000
    }
    if(localStorage.getItem("Geforce-GT-2")!=null)
    {
        totalCost=totalCost+22000
    }
    if(localStorage.getItem("Geforce-GT-3")!=null)
    {
        totalCost=totalCost+26000
    }
    if(localStorage.getItem("Processor-1")!=null)
    {
        totalCost=totalCost+14000
    }
    if(localStorage.getItem("Processor-2")!=null)
    {
        totalCost=totalCost+22000
    }
    if(localStorage.getItem("Processor-3")!=null)
    {
        totalCost=totalCost+38000
    }
    if(localStorage.getItem("Processor-4")!=null)
    {
        totalCost=totalCost+56000
    }
    costEl.innerText=totalCost
}











function removeButton()
{
if(localStorage.getItem("Vengeance")!=null)
{
    ram1.innerText="Added Successfully"
    document.getElementById('r1').style.visibility='visible'
}
if(localStorage.getItem("Vengeance-2")!=null)
{
    ram2.innerText="Added Successfully"
    document.getElementById('r2').style.visibility='visible'
}
if(localStorage.getItem("Vengeance-3")!=null)
{
    ram3.innerText="Added Successfully"
    document.getElementById('r3').style.visibility='visible'
}
}
removeButton()
function clearitems()
{
    localStorage.clear()
    costEl.innerText=0
    items()
}
removeButton()
function cart()
{
    let count=0
    if(localStorage.getItem("Vengeance")!=null)
    {
        count=count+1
    }
    if(localStorage.getItem("Vengeance-2")!=null)
    {
        count=count+1
    }
    if(localStorage.getItem("Vengeance-3")!=null)
    {
        count=count+1
    }
    if(localStorage.getItem("Geforce-GT-1")!=null)
    {
        count=count+1
    }
    if(localStorage.getItem("Geforce-GT-2")!=null)
    {
        count=count+1
    }
    if(localStorage.getItem("Geforce-GT-3")!=null)
    {
        count=count+1
    }
    if(localStorage.getItem("Processor-1")!=null)
    {
        count=count+1
    }
    if(localStorage.getItem("Processor-2")!=null)
    {
        count=count+1
    }
    if(localStorage.getItem("Processor-3")!=null)
    {
        count=count+1
    }
    if(localStorage.getItem("Processor-4")!=null)
    {
        count=count+1
    }
    c0.innerText=count
}
cart()
function items()
{
    let totalitems=""
    if(localStorage.getItem("Vengeance")!=null)
    {
        totalitems=totalitems+"GSkill-Ripjaws-S5-64GB-32GBx2-Ddr5-6000MHz\n"
    }
    if(localStorage.getItem("Vengeance-2")!=null)
    {
        totalitems=totalitems+"GSkill-Trident-Z5-Rgb-64Gb-Ddr5-6000Mhz\n"
    }
    if(localStorage.getItem("Vengeance-3")!=null)
    {
        totalitems=totalitems+"G.Skill-Trident-Z5-Neo-Rgb-64GB-32GBx2-DDR5-6000MHz\n"
    }
    if(localStorage.getItem("Geforce-GT-1")!=null)
    {
        totalitems=totalitems+"Geforce-GT 1030\n"
    }
    if(localStorage.getItem("Geforce-GT-2")!=null)
    {
        totalitems=totalitems+"Geforce-GT 1650\n"
    }
    if(localStorage.getItem("Geforce-GT-3")!=null)
    {
        totalitems=totalitems+"Geforce-GT 3060\n"
    }
    if(localStorage.getItem("Processor-1")!=null)
    {
        totalitems=totalitems+"I3 Processor 13 gen\n"
    }
    if(localStorage.getItem("Processor-2")!=null)
    {
        totalitems=totalitems+"I5 Processor 13 gen\n"
    }
    if(localStorage.getItem("Processor-3")!=null)
    {
        totalitems=totalitems+"I7 Proceesor 13 gen\n"
    }
    if(localStorage.getItem("Processor-4")!=null)
    {
        totalitems=totalitems+"I9 Proceesor 13 gen\n"
    }
    IN.innerText=totalitems
}
