// Если мы вызываем mockReturnValue(3), то исходная реализация функции заменяется на ()=>return 3

class Service{
    createUser(){
        console.log("user created!")
        x = 7;
        return {name:"abc"}
    }
}

let x = 2;

describe('mock',()=>{
    it("mock",()=>{
        const mockFn = jest.fn(()=>{
            console.log("body")
        });
        mockFn();
        expect(mockFn).toHaveBeenCalled();
    })

    it("mock not return",()=>{
        const mockFn = jest.fn(()=>{
            console.log("start")
            // throw new Error("abc")
            if (Math.random() > 0.5) return 1;
            console.log("not 1")
            return 2;
        });
        // mockFn.mockReturnValue(3)
        mockFn();
        expect(mockFn).toHaveBeenCalled();
    })

    it("mock return",()=>{
        const mockFn = jest.fn(()=>{
            console.log("start")
            // throw new Error("abc")
            if (Math.random() > 0.5) return 1;
            console.log("not 1")
            return 2;
        });
        mockFn.mockReturnValue(3)
        mockFn();
        expect(mockFn).toHaveBeenCalled();
    })

    it("spyon return",()=>{

        const mockFn = jest.spyOn(Service.prototype,"createUser").mockReturnValue(4);

        console.log(mockFn());
        console.log(x)
        expect(mockFn).toHaveBeenCalled();
    })

    it("spyon not return",()=>{

        const mockFn = jest.spyOn(Service.prototype,"createUser")

        console.log(mockFn());
        console.log(x)
        expect(mockFn).toHaveBeenCalled();
    })

    it("spyon not return",()=>{

        const mockFn = jest.spyOn(Service.prototype,"createUser")

        new Service().createUser()
        expect(mockFn).toHaveBeenCalled();
    })

    it("spyon return",()=>{

        const mockFn = jest.spyOn(Service.prototype,"createUser").mockReturnValue(4);

        new Service().createUser()
        expect(mockFn).toHaveBeenCalled();
    })
})
