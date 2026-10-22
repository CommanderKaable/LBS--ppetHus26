
import React, { useEffect, useRef, useState } from 'react'
import ButtonClassroom from './ButtonClassroom'
import salar, { kartknappar } from '../data/salar.js'
import { asset } from '../lib/asset.js'


// OpenHouseInteractive visar skolans karta. Klicka på en byggnad för att se planritningen.
// Texterna och knapparnas placering redigeras i src/data/salar.js
const roompick = Object.fromEntries(
    Object.entries(salar).map(([key, room]) => [key, { ...room, image: room.image ? asset(room.image) : "" }])
)

const OpenHouseInteractive = ({ initialRoom = "Karta", allowedRooms }) => {
    const [roomSelected, setRoomSelected] = useState(initialRoom)
    const [roomHistory, setRoomHistory] = useState([])
    const preloadedImages = useRef([])

    useEffect(() => {
        preloadedImages.current = Object.values(roompick).filter(({ image }) => image).map(({ image }) => {
            const preloadedImage = new Image()
            preloadedImage.onerror = () => {
                console.error(`Could not preload classroom map: ${image}`)
            }
            preloadedImage.src = image
            return preloadedImage
        })

        return () => {
            preloadedImages.current = []
        }
    }, [])

    const buttons = kartknappar.map(button => ({ ...button, imageKey: button.room, visible: true }))

    const selectRoom = (room) => {
        if (room === roomSelected) return

        setRoomHistory(previous => [...previous, roomSelected])
        setRoomSelected(room)
    }

    const goBack = () => {
        if (roomHistory.length === 0) {
            setRoomSelected("Karta")
            return
        }

        const previousRoom = roomHistory[roomHistory.length - 1]

        setRoomHistory(previous => previous.slice(0, -1))
        setRoomSelected(previousRoom)
    }

    const isMainMap = roomSelected === "Karta"
    const canNavigateTo = (room) => !allowedRooms || allowedRooms.includes(room)
    const backRoom = roomHistory[roomHistory.length - 1]
    const canGoBack = !isMainMap && (
        backRoom ? canNavigateTo(backRoom) : !allowedRooms
    )
    const showAnerNavigation = roomSelected === "Aner" && canNavigateTo("Aupp")
    const showDNavigation = roomSelected === "D" && canNavigateTo("Dupp")
    const selectedMap = roompick[roomSelected]

    return (
        <section className={`section openhouse-map-section${isMainMap ? " is-overview" : ""}`} id="openhouse">
            <div className="openhouse-map-heading text-center">
                <p className="mono-label dark">[ ÖPPET HUS ]</p>
            </div>

            <div className="openhouse-map-content">
                <div className={`openhouse-map-toolbar${canGoBack ? " has-back" : ""}`}>
                    {canGoBack && (
                        <ButtonClassroom
                            id="button-back"
                            onClick={goBack}
                        >
                            <span aria-hidden="true">←</span>
                            <span>Tillbaka</span>
                        </ButtonClassroom>
                    )}

                    <div className="openhouse-map-copy" key={`copy-${roomSelected}`}>
                        <h3 className="openhouse-map-title animate-map-in">
                            {selectedMap.title}
                        </h3>
                        <p
                            id="openhouse-map-description"
                            className="openhouse-map-description animate-map-in"
                        >
                            {selectedMap.description}
                        </p>
                    </div>
                </div>
                {/* Våningsknappar ovanför planritningen, så att de inte täcker kartan */}
                {(showAnerNavigation || showDNavigation) && (
                    <div className="openhouse-floor-nav">
                        {showAnerNavigation && (
                            <ButtonClassroom id="button-up-aupp" onClick={() => selectRoom("Aupp")}>
                                ↑ Tredje våningen
                            </ButtonClassroom>
                        )}
                        {showDNavigation && (
                            <ButtonClassroom id="button-up-dupp" onClick={() => selectRoom("Dupp")}>
                                ↑ Andra våningen
                            </ButtonClassroom>
                        )}
                    </div>
                )}
                <div className="openhouse-map-stage">
                    <div className="openhouse-map-image-wrap">
                        {/* Byggnader utan bild (t.ex. B) visar bara rubrik och text */}
                        {selectedMap.image && (
                            <img
                                key={roomSelected}
                                src={selectedMap.image}
                                alt={selectedMap.title}
                                aria-describedby="openhouse-map-description"
                                className="animate-map-in"
                            />
                        )}

                        {isMainMap &&
                            buttons
                                .filter(button => button.visible && canNavigateTo(button.imageKey))
                                .map(button => (
                                    <ButtonClassroom
                                        key={button.id}
                                        id={button.id}
                                        style={{
                                            position: "absolute",
                                            left: `${button.x}%`,
                                            top: `${button.y}%`,
                                            transform: "translate(-50%, -50%)",
                                        }}
                                        onClick={() => selectRoom(button.imageKey)}
                                    >
                                        ↓ {button.label} ↓
                                    </ButtonClassroom>
                                ))}


                    </div>
                </div>
            </div>
        </section>
    )
}

export default OpenHouseInteractive
