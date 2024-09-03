let GC1 =document.getElementById("GC-1")
document.getElementById('G1').style.visibility='hidden'
let GC2 =document.getElementById("GC-2")
document.getElementById('G2').style.visibility='hidden'
let GC3 =document.getElementById("GC-3")
document.getElementById('G3').style.visibility='hidden'
let c1=document.getElementById("c1")


function incrementGC1()
{
    GC1.innerText="Added Successfully"
    localStorage.setItem("Geforce-GT-1","18000")
    document.getElementById('G1').style.visibility='visible'
    removeButton()
    cart()
}
function incrementGC2()
{
    GC2.innerText="Added Successfully"
    localStorage.setItem("Geforce-GT-2","22000")
    document.getElementById('G2').style.visibility='visible'
    removeButton()
    cart()
}
function incrementGC3()
{
    GC3.innerText="Added Successfully"
    localStorage.setItem("Geforce-GT-3","26000")
    document.getElementById('G3').style.visibility='visible'
    removeButton()
    cart()
}



function removeG1()
{
    localStorage.removeItem("Geforce-GT-1")
    GC1.innerText="Add to your PC"
    document.getElementById('G1').style.visibility='hidden'
    cart()
}function removeG2()
{
    localStorage.removeItem("Geforce-GT-2")
    GC2.innerText="Add to your PC"
    document.getElementById('G2').style.visibility='hidden'
    cart()
}function removeG3()
{
    localStorage.removeItem("Geforce-GT-3")
    GC3.innerText="Add to your PC"
    document.getElementById('G3').style.visibility='hidden'
    cart()
}



function removeButton()
{
if(localStorage.getItem("Geforce-GT-1")!=null)
{
    GC1.innerText="Added Successfully"
    document.getElementById('G1').style.visibility='visible'
}
if(localStorage.getItem("Geforce-GT-2")!=null)
{
    GC2.innerText="Added Successfully"
    document.getElementById('G2').style.visibility='visible'
}
if(localStorage.getItem("Geforce-GT-3")!=null)
{
    GC3.innerText="Added Successfully"
    document.getElementById('G3').style.visibility='visible'
}
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
    c1.innerText=count
}
cart()