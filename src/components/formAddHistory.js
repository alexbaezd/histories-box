import React, { useState } from 'react'
import axios from "axios"
import styled from "styled-components"


const FormHistory = styled.form`
  padding: 0.7rem 1rem;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  background: white;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);

  @media (max-width: 640px){
    flex-direction:column;
    align-items:flex-start;
  }
`
const FormHistoryLabel = styled.label`
  color: #7f8082;
  margin-right: 1.5rem;
  @media (max-width: 640px) {
  width: 100%;
  }
`
const FormHistoryInput = styled.input`
  margin-left: 0.5rem;
  @media (max-width: 640px) {
    margin-bottom:1rem;
    width: 80%;
  }
`
const FormHistorySubmit = styled.button`
  color: #2d4059;
  border: 1px solid #6f90fc;
  background: transparent;
  padding: 0 1rem;
  font-weight: 400;
  border-radius: 5px;
  @media (max-width: 640px) {
    margin-top:0.5rem;
  }

`

const Form = ({ reloadData }) => {
  const [title, setTitle] = useState("")
  const [url, setURL] = useState("")

  const handleSubmit = async event => {
    event.preventDefault()

    if (title === "" && url === "") return

    //TODO: call create function
    await axios.post(`${process.env.URL_FUNCTIONS}/api/create-history`, {
      title,
      url,
    })
    setTitle("")
    setURL("")

    //TODO: reload data
    reloadData();
  }

  return (
    <FormHistory onSubmit={handleSubmit}>
      <FormHistoryLabel htmlFor="title">
        Title
        <FormHistoryInput
          autoComplete="off"
          required
          value={title}
          name="title"
          type="text"
          onChange={e => setTitle(e.target.value)}
        />
      </FormHistoryLabel>
      <FormHistoryLabel htmlFor="url">
        Link
        <FormHistoryInput
          autoComplete="off"
          required
          value={url}
          name="url"
          type="url"
          onChange={e => setURL(e.target.value)}
        />
      </FormHistoryLabel>
      <FormHistorySubmit>Save</FormHistorySubmit>
    </FormHistory>
  )
}

export default Form
