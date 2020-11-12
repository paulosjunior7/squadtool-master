import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from './ItemTypes'
import { useEffect } from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import Player from '../../models/Player';

const style: React.CSSProperties = {
  display: 'flex',
  width: '55px',
  height: '55px',
  borderRadius: '50px',
  backgroundColor: '#D09BBE',
  border: '1px dashed #fff',
  justifyContent: 'center',
  alignItems: 'center',
  marginLeft: '18px',
  marginRight: '18px',
  zIndex: 99999,
  fontWeight: 'bold',
  color: '#802F80'
}


interface BoxProps {
  posicaoX: number;
  posicaoY : number;
  sigla: string;
  habilitado: boolean;
  player: Player;
}

export const Dustbin: React.FC<BoxProps> = ({ posicaoX, posicaoY , sigla, habilitado , player }) => {

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.BOX,
    drop: () => ({ posicao: [posicaoX, posicaoY] }),
    collect: (monitor) => ({
      isOver: monitor.isOver() && habilitado,
      canDrop: monitor.canDrop() && habilitado,
    }),
  })

  const isActive = canDrop && isOver
  let backgroundColor = '#D09BBE'
  if (isActive) {
    backgroundColor = 'darkgreen'
  } else if (canDrop) {
    backgroundColor = 'darkkhaki'
  }

  return (
    <div ref={drop} style={{ ...style, backgroundColor }}>
      <span 
      title={ 
        'Name: ' + player?.player_name + '\n' +
        'Nationality: ' + player?.nationality + '\n' + 
        'Age: ' + player?.age 
      }>
      {habilitado ? <AiOutlinePlus size={19} color="#fff" /> : sigla}
      </span>
    </div>
  )
}
