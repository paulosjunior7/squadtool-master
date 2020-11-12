import React from 'react'
import { useDrag, DragSourceMonitor } from 'react-dnd'
import { ItemTypes } from '../ItemTypes'
import Player from '../../../models/Player'
import formatAge from '../../../utils/formatAge';

import { Card, Title, Line } from '../Box/styles';

const style: React.CSSProperties = {
    backgroundColor: 'white',
    cursor: 'move',
}

interface BoxProps {
    player: Player;
    onChange(player: Player, posicao: [number, number]): void;
}

export const Box: React.FC<BoxProps> = ({ player, onChange }) => {

    const [{ isDragging }, drag] = useDrag({
        item: { player: player, type: ItemTypes.BOX },

        end: (item: { player: Player } | undefined, monitor: DragSourceMonitor) => {
            const dropResult = monitor.getDropResult()
            if (item && dropResult) {
                onChange(player, dropResult.posicao);
            }
        },

        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),

    })
    const opacity = isDragging ? 0.4 : 1

    return (
        <div ref={drag} style={{ ...style, opacity }}>
            <Card>
                <Line>
                    <Title>
                        Name: <p>{ player.firstname.toString().substr(0,27) }</p>
                    </Title>

                    <Title>
                        Idade: <p>{player.age}</p>
                    </Title>

                </Line>
                <Line>
                    <Title>
                        Nacionality: <p>{player.nationality}</p>
                    </Title>
                </Line>
            </Card>
        </div>
    )
}
