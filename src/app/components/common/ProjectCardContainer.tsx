"use client"
import { useModal } from '@/app/store/ModalProvider'
import React from 'react'
import { Project } from './ProjectCard'
import ProjectCard from './ProjectCard'

type Props = {
    project: Project
}

export default function ProjectCardContainer({ project }: Props) {

    const { openModal } = useModal()

    return (
        <ProjectCard
            project={project}
            onClick={() => openModal(project)}
        />
    )
}
