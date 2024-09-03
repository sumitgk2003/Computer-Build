let PRR1 =document.getElementById("Processor-1")
document.getElementById('PR1').style.visibility='hidden'
let PRR2 =document.getElementById("Processor-2")
document.getElementById('PR2').style.visibility='hidden'
let PRR3 =document.getElementById("Processor-3")
document.getElementById('PR3').style.visibility='hidden'
let PRR4 =document.getElementById("Processor-4")
document.getElementById('PR4').style.visibility='hidden'
let c2=document.getElementById("c2")
function incrementProcessor1()
{
    PRR1.innerText="Added Successfully"
    localStorage.setItem("Processor-1","14000")
    document.getElementById('PR1').style.visibility='visible'
    removeButton()
    cart()
}
function incrementProcessor2()
{
    PRR2.innerText="Added Successfully"
    localStorage.setItem("Processor-2","22000")
    document.getElementById('PR2').style.visibility='visible'
    removeButton()
    cart()
}
function incrementProcessor3()
{
    PRR3.innerText="Added Successfully"
    localStorage.setItem("Processor-3","38000")
    document.getElementById('PR3').style.visibility='visible'
    removeButton()
    cart()
}
function incrementProcessor4()
{
    PRR4.innerText="Added Successfully"
    localStorage.setItem("Processor-4","56000")
    document.getElementById('PR4').style.visibility='visible'
    removeButton()
    cart()
}
function removePR1()
{
    localStorage.removeItem("Processor-1")
    PRR1.innerText="Add to your PC"
    document.getElementById('PR1').style.visibility='hidden'
    cart()
}
function removePR2()
{
    localStorage.removeItem("Processor-2")
    PRR2.innerText="Add to your PC"
    document.getElementById('PR2').style.visibility='hidden'
    cart()
}
function removePR3()
{
    localStorage.removeItem("Processor-3")
    PRR3.innerText="Add to your PC"
    document.getElementById('PR3').style.visibility='hidden'
    cart()
}
function removePR4()
{
    localStorage.removeItem("Processor-4")
    PRR4.innerText="Add to your PC"
    document.getElementById('PR4').style.visibility='hidden'
    cart()
}
function removeButton()
{
if(localStorage.getItem("Processor-1")!=null)
{
    PRR1.innerText="Added Successfully"
    document.getElementById('PR1').style.visibility='visible'
}
if(localStorage.getItem("Processor-2")!=null)
{
    PRR2.innerText="Added Successfully"
    document.getElementById('PR2').style.visibility='visible'
}
if(localStorage.getItem("Processor-3")!=null)
{
    PRR3.innerText="Added Successfully"
    document.getElementById('PR3').style.visibility='visible'
}
if(localStorage.getItem("Processor-4")!=null)
{
    PRR4.innerText="Added Successfully"
    document.getElementById('PR4').style.visibility='visible'
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
    c2.innerText=count
}
cart()