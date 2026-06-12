"use client"

import { Dispatch, SetStateAction, createContext, useContext, useRef, useState } from "react"
import { Project } from "../components/common/ProjectCard"
import Modal from "../components/common/Modal"

import DummyImage from "../../../public/placeholder.png"

type Props = {
    children: React.ReactNode
}

type IsOpen = boolean;
type SetIsOpen = Dispatch<SetStateAction<boolean>>
type State = Project
type SetState = Dispatch<SetStateAction<State>>

type ModalStatetype = {
    openModal: (project: Project) => void | null,
    closeModal: () => void,
    state: State,
    setState: SetState
}

const initialState = { name: '', content: '', url: '', id: -1, technologies: [''], img: DummyImage }

const ModalState = createContext<ModalStatetype>({
    openModal: (project) => null,
    state: initialState,
    closeModal: () => null,
    setState: () => null
})

export const useModal = () => useContext(ModalState)

export default function ModalProvider({ children }: Props) {

    const [state, setState] = useState<Project>(initialState)
    const modalRef = useRef<null | HTMLDialogElement>(null)

    const openModal = (project: Project): void => {
        if (!!project) {
            setState(project)
        }

        if (modalRef.current && !modalRef.current.open) {
            modalRef.current.showModal()
        }
    }

    const closeModal = () => {
        modalRef.current?.close()
    }

    return (
        <ModalState.Provider value={{ openModal, closeModal, state, setState }}>
            {
                children
            }
            <dialog ref={modalRef}>
                <Modal
                    title={state.name}
                    description={state.content}
                    technologies={state.technologies}
                    url={state.url}
                />
            </dialog>
        </ModalState.Provider>
    )
}
