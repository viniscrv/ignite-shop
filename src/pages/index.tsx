import { styled } from "../styles"

const Button = styled("button", {
  backgroundColor: "$purple",
  borderRadius: 4,
  border: 0,
  padding: "4px 8px",
  cursor: "pointer",
})

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Button>Click me</Button>
    </>
  )
}
