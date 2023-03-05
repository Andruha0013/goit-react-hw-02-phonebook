class LocalStorApp{
    constructor(key){
        this.key=key;
    }
    setData(data){
        try{
            data=JSON.stringify(data);
        }
        catch(error){
            console.log(error.name);
            console.log(error.message);
            return false;
        }

        localStorage.setItem(this.key,data);
        return true;
    }
    getData(){
        try{
            let data=localStorage.getItem(this.key);
            if(data!==null){
                data=JSON.parse(data);
            }
            return data;
        }
        catch(error){
            console.log(error.name);
            console.log(error.message);
            return false;
        }
    }
    deleteData(){
        try{
            localStorage.removeItem(this.key);
            return true;
        }
        catch(error){
            console.log(error.name);
            console.log(error.message);
            return false;
        }
    }
}

export default LocalStorApp;