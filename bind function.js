const obj = {
            name:'ritik',
            dept : "MCA",
            getFulldetailed:function(){
                        console.log(this.name+ " "+this.dept);
            }
}
function Detail(name,dept){
            this.name = "Sohan";
            this.dept = "bba";

}

let getfullname = obj.getFulldetailed.bind(D etail);
console.log(getfullname);
getfullname();