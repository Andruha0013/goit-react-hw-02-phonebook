import React, { Component } from "react";
import { nanoid } from 'nanoid';
import LocalStorApp from "./myLib/LocalStorApp";

//import Phonebook from "./Phonebook/Phonebook";
import ContactForm from "./Phonebook/ContactForm/ContactForm";
import Filter from "./Phonebook/Filter/Filter";
import ContactList from "./Phonebook/ContactList/ContactList";
import css from "./Phonebook.module.css"

const myStorage=new LocalStorApp("phoneBook");
var initialContacts=myStorage.getData();
if(initialContacts===false||initialContacts===null){
  initialContacts=[];
}
class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  }
  //-----------------------------------------------------------------
  checkValue(value){
    if(value!==""&&value!==undefined){
      return true;
    }
    else{
      return false;
    }
  }
  //-----------------------------------------------------------------
  addContact=data=>{
    console.log("add");
    let counter=0;//------------------------------рахує кількість запусків setState, милиця для того щоб ф-ція не виконувалась двічі
    if(this.checkValue(data.name)&&this.checkValue(data.number)){
      this.setState((prevState)=>{
        let x=prevState.contacts;
        if(counter===0){
          counter++;//------------------------------рахує кількість запусків setState, милиця для того щоб ф-ція не виконувалась двічі
        //console.log(this.unicData(x,"name",data.name));
        if(this.unicData(x,"name",data.name)){
          if(this.unicData(x,"number",data.number)){
            console.log(this.unicData(x,"number",data.number));
            x.push({id: nanoid(),name: data.name, number: data.number});
            console.log(data);
            myStorage.setData(x);
            return {contacts: x}
          }
          else{
            alert("such number is already exists");
          }
        }
        else{
          alert("such name is already exists");
        }
      }
        //console.log(counter);
        return x;
      });
    }
  }
  //-----------------------------------------------------------------
  delContact=(event)=>{
    if(event.target.type==="button"){
      console.log(event.target.value);
      
        this.setState((prevState)=>{

          let elemIndex=this.state.contacts.findIndex((element)=>{
            if(element.id===event.target.value){
              return true;
            }
            else{
              return false;
            }
          });

          if(elemIndex>=0){
            console.log(elemIndex);
            let x=prevState.contacts;
            x.splice(elemIndex,1);
            console.log(x);
            myStorage.setData(x);
            return {
              contacts: x,
            }
          }
        });
    }
  }
  //-----------------------------------------------------------------
  getFilter=(event)=>{
    if(event.target.value!==""&&event.target.value!==undefined){
      this.setState(()=>{
          return {filter: event.target.value};
      });
    }
    else{
      this.setState(()=>{
        return {filter: null};
      });
    }
  }
  //-----------------------------------------------------------------
  filterContact(){
    if(this.state.filter!==null&&this.state.filter!==""){
      return this.state.contacts.filter((contact)=>{
      if(contact.name.toLocaleLowerCase().includes(this.state.filter)){
        return contact;
      }
      else{
        return false;
      }
      });
    }
    else{
      return this.state.contacts;
    }

  }
  //------------------------------------------------------------------
  unicData=(dataMass,key,item)=>{
    let index=dataMass.findIndex((dataItem)=>{
      if(dataItem[key].toLocaleLowerCase().includes(item.toLocaleLowerCase())){
        return true;
      }
      return false;
      });

    if(index===(-1)){
      return true;
    }
    else{
      return false;
    }
  }
  //------------------------------------------------------------------
  render(){
    return (
      <div className={css.phoneBook}>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter filterFunction={this.getFilter}/>
        <ContactList 
          dataList={this.filterContact()}
          btnFunction={this.delContact}
        />
      </div>
    );
  }
};

export default App;