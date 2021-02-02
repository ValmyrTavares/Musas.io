export default class Slide{
    constructor(){
        this.img = document.querySelectorAll("Img")
        this.li = document.querySelectorAll("li")
        this.cont = 0;
    }
    addEvent(){
        this.img[0].classList.add("show")
        this.li[0].classList.add("change-color")
        this.setImg()
        this.li.forEach((item,index)=>{
            item.addEventListener('click',()=>{
                this.clickPoint(index)
            })
        })
    }
    clickPoint(index){
        clearInterval(this.stopSlide)
        this.img.forEach(item=>{
            item.classList.remove("show")
            })
        this.img[index].classList.add("show")
        this.setColor(index)
        this.cont = index;
        this.setImg()
    }


    setImg(){
        this.stopSlide = setInterval(()=>{
            if(this.cont>9)this.cont=0
            this.img.forEach(item=>{
            item.classList.remove("show")
            })
            this.img[this.cont].classList.add("show");
            this.setColor(this.cont)
            this.cont++
        },2000)
    }

    setColor(index){
        this.li.forEach(item=>{
            item.classList.remove("change-color")
        })
        this.li[index].classList.add("change-color")
    }




    init(){
       this.addEvent()
    }
}
console.log("Slide dentro")