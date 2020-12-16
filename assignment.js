class quadrilateral {
    constructor(length,breadth) {
        this.length=length;
        this.breadth=breadth;
      console.log("quadrilateral");
    }
  }
  
  class square extends quadrilateral {
    constructor(length,breadth) {
      super();
      this.length=length;
      this.breadth=breadth;
      this.area=length*length;
      this.perimeter=4*length;
      console.log("square");
    }
  }
  
  class rectangle extends square {
    constructor(length,breadth) {
      super();
      this.length=length;
      this.breadth=breadth;
      this.area=length*breadth;
      this.perimeter=2*(length+breadth)
      console.log("Rectangle");
    }
  }
  
  class rhombus extends rectangle {
    constructor(length,breadth) {
      super();
      this.length=length;
      this.breadth=breadth;
      this.area=(length+breadth)/2;
      this.perimeter=4*length
      console.log("Rhombus");
    }
  }
  
  class parallelogram extends rhombus {
    constructor(a,b,c,d,h) {
      super();
      this.a=a;
      this.b=b;
      this.c=c;
      this.d=d;
      this.h=h;
      this.area=b*h;
      this.perimeter=a+b+c+d
      console.log("Parallelogram");
    }
  }
  class trapezoid extends parallelogram {
    constructor(a,b,h) {
      super();
      this.a=a;
      this.b=b;
      this.h=h;
      this.area=(a*b)*h/2;
      this.perimeter=2*(a+b)
      console.log("Trapezoid");
    }
  }
  
  const A = new trapezoid(); //
  const B = new parallelogram(); //
  const C = new rhombus(2,5,3,5,4); //
  const D = new rectangle(2,4); //
  const E = new square(); //
  console.log(D)
  console.log(A)
  console.log(E)
  console.log(C)
  console.log(B)