import styled from "styled-components"

export const StoryContainer = styled.div`
  display: grid;
  grid-template-rows: 40% 60%;
  gap: 0.5rem;
  margin-bottom: 0.2rem;
  padding: 1rem;
  border-radius: 2px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
  height: auto;
  background: white;
  align-items: center;
  justify-content: center;
  width: 100%;
  @media (max-width: 640px) {
    height: auto;
    grid-template-columns: 100%;
  }
`
export const StoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`
export const StoryTitle = styled.a`
  color: #7f8082;
  font-size: 1.8vmin;
  line-height: 1.4em;
  font-weight: 600;
  margin-bottom: 0rem;
  transition: color 0.3s;
  display: block;
  &:hover {
    color: #e6496b;
  }
  @media (max-width: 640px) {
    font-size: 4vmin;
  }
`
export const StoryNote = styled.small`
  color: #e6496b;
  margin: 0;
  font-style: italic;
  margin-bottom: 1.5rem;
`
export const StoryButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 0.5rem;
  gap: 0.5rem;
  @media (max-width: 640px) {
    justify-content: space-around;
  }
`
export const StoryButton = styled.a`
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  text-decoration: none;
  background: transparent;
  border: 1px solid #6f90fc;
  color: black;
  margin-right: 0.5rem;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-2px);
  }
`
export const StoryDeleteButton = styled.button`
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  background: transparent;
  border: 1px solid #e6496b;
  color: black;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-2px);
  }
`
export const StoryDescription = styled.p`
  color: #8d93ab;
  font-size: 0.7rem;
  font-weight: 200;
  margin-bottom: 0.2rem;
  line-height: 1.5em;
  padding-bottom: 0.4rem;
  @media (max-width: 640px) {
    margin-bottom: 0.8rem;
  }
`
export const StoryImage = styled.img`
  width: 100px;
  border-radius: 3px;
  margin-bottom: 0;
  @media (max-width: 640px) {
    display: none;
  }
`
export const StoryReadGroup = styled.div`
  border: 1px solid #66bfbf;
  padding: 0.3rem;
  border-radius: 5px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-2px);
  }
`
