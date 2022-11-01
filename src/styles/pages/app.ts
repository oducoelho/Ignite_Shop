import { styled } from "..";

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})
export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
})
export const SideBarContainer = styled('div',{
  backgroundColor: '#202024', 
})
export const MenuItens = styled('div', {
  width: '100%',
})
export const CloseSideBar = styled('div',{
  width: '100%',
  height: '80px',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',

  div: {
    marginLeft: '27rem',
    fontSize: '2rem',
    background: 'none',
    cursor: 'pointer',
  }
})
export const ContentContainer = styled('div', {
  margin: '0 48px',
  h1: {
    fontSize: '20px',
    paddingBottom: '32px'
  }
})
export const Product = styled('div', {
  display: 'flex',
  paddingBottom: '24px',
  div: {
    paddingLeft: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',

    span: {
      color: '$gray300',
      FontSize: '18px',
    },
    strong: {
      color: '$white',
      FontSize: '18px',
    },
    p: {
      color: '$green300',
      FontSize: '16px',
    },
  }
})
export const PreviewPhoto = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  cursor: 'pointer',
  width: '101.94',
  height: 93,


})
export const FinishBuy = styled('div', {
  marginTop: '15rem',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
  div: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  
    span:{
      fontSize: '18px',
      color: '$gray100'  
    },
    strong: {
      fontSize: '24px',
      color: '$gray100'
    }
  },

  button: {
    marginTop: '25px',
    width: '100%',
    padding: '20px 32px',
    borderRadius: 8,
    backgroundColor: '$green500',
    border: 'none',
    color: '$white',
    fontSize: '18px',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    }
  }
})