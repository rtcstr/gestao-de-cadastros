import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  
  
  //Client

  const [ name, setName ] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf]=useState('')
  const [phone, setPhone] = useState ('')

  const handleRegisterClient = (event) => {
    event.preventDefault();

    const client = {
      name,email,cpf,phone
    }

    const clients = localStorage.getItem("clients") ? JSON.parse(localStorage.getItem("clients")) : [];

    clients.push(client)

    localStorage.setItem("clients", JSON.stringify(clients));
  }


  //Product

  const [productName, setProductName ] = useState('')
  const [code, setCode] = useState('')
  const [price, setPrice]=useState(0)
  const [count, setCount] = useState (0)

  const handleRegisterProduct = (event) => {
    event.preventDefault();

    const product = {
      productName,code,price,count
    }

    const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];

    products.push(product)

    localStorage.setItem("products", JSON.stringify(products))
  }

  return (


    <main>

    <h1>Cadastro de Clientes</h1>

      <form onSubmit={handleRegisterClient}>

          <fieldset>
            <label>Nome</label>
            <input onChange={e => {setName(e.target.value)}} type="text" name="Nome" placeholder="Digite seu nome completo" autoComplete="name" required/>
          </fieldset>

          <fieldset>
              <label>E-mail</label>
              <input onChange={e => {setEmail(e.target.value)}} type="email" name="email" placeholder="usuario@email.com" autoComplete="email" required/>
          </fieldset>

          <fieldset>
              <label>CPF</label>
              <input onChange={e => {setCpf(e.target.value)}} type="text" name="cpf" placeholder="000.000.000-00" maxlength="11" required />
          </fieldset>
          
          
          <fieldset>
              <label>Telefone</label>
              <input onChange={e => {setPhone(e.target.value)}} type="phone"name="phone" placeholder="(99) 9999-9999" required />
          </fieldset>  

          <button type="submit">Enviar</button>      
      </form>



    {/* Cadastro de produto */}

    <h1>Cadastro de Produtos</h1>
    <form onSubmit={handleRegisterProduct}>

          <fieldset>
            <label>Nome do Produto</label>
            <input onChange={e => {setProductName(e.target.value)}} type="text" name="productName" placeholder="Ex. Blusa Azul" autoComplete="productName" required/>
          </fieldset>

          <fieldset>
            <label>Código do Produto</label>
            <input onChange={e => {setCode(e.target.value)}} type="text" name="code" placeholder="Ex.: AX9856"  required/>
          </fieldset>

          <fieldset>
            <label>Preço</label>
            <input onChange={e => {setPrice(e.target.value)}} type="number" name="price" placeholder="Ex.: 5,99"  required/>
          </fieldset>

          <fieldset>
            <label>Quantidade</label>
            <input onChange={e => {setCount(e.target.value)}} type="number" name="count" placeholder="Ex: 2" required/>
          </fieldset>

          <button type="submit">Enviar</button>      
      </form>
    

  

    </main>
  );
}

export default App;
