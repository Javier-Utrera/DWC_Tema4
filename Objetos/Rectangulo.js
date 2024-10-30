class Rectangulo{ 
    constructor(a,b){ 
        this.a=a;
        this.b=b;
    };
    lado1(){ 
        return Math.abs(this.a.x-this.b.x);
    };
    lado2(){ 
        return Math.abs(this.a.y-this.b.y);
    };
    areac(){ 
        return this.lado1()*this.lado2();
    };
    perimetroc(){ 
        return (2*this.lado1())+(2*this.lado2())
    };
}