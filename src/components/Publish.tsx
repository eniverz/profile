import { motion } from "framer-motion"
import style from "../styles.ts"
import { fadeIn, textVariant } from "../utils/motion.ts"
import SectionWrapper from "../hoc/SectionWrapper.tsx"
import { publishes } from "../constants"
import { PublishType } from "../model"

const PublishCard = ({ publish, index }: { publish: PublishType; index: number }) => (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="bg-tertiary p-5 rounded-2xl">
        <div className="flex flex-col sm:flex-row gap-5">
            <div className="relative w-full sm:w-[280px] flex-shrink-0">
                <img
                    src={publish.teaser}
                    alt={`Teaser for ${publish.title}`}
                    className="w-full h-auto object-contain rounded-lg"
                />
            </div>

            <div className="flex flex-col justify-center">
                <h3 className="text-white font-bold text-[22px]">{publish.title}</h3>
                <p className="mt-2 text-secondary text-[14px]">
                    {publish.authors.map((author, idx) => {
                        const trimmed = author.trim()
                        const hasStar = trimmed.endsWith("*")
                        const name = hasStar ? trimmed.slice(0, -1).trim() : trimmed
                        const isMe = name === "Yaoyu He"

                        return (
                            <span key={idx}>
                                {isMe ? <strong>{name}</strong> : name}
                                {hasStar ? "*" : ""}
                                {idx < publish.authors.length - 1 ? ", " : ""}
                            </span>
                        )
                    })}
                </p>
                <p className="mt-2 text-secondary text-[16px] font-medium">{publish.journal}</p>
                <div className="mt-4 flex flex-wrap gap-4 items-center">
                    {publish.project_link && (
                        <a
                            href={publish.project_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-400 hover:underline text-[16px] font-bold"
                        >
                            [Project Page]
                        </a>
                    )}

                    <a
                        href={`https://arxiv.org/abs/${publish.arxiv}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-500 hover:underline text-[16px] font-bold"
                    >
                        [Paper]
                    </a>

                    {publish.code_link && (
                        <a
                            href={publish.code_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:underline text-[16px] font-bold"
                        >
                            [Code]
                        </a>
                    )}
                </div>
            </div>
        </div>
    </motion.div>
)

const NaivePublish = () => {
    // Sort all publications in descending order based on arxiv ID
    const sortedPublishes = [...publishes].sort((a, b) => {
        // Remove the dot and compare numerically for accurate sorting
        const idA = Number(a.arxiv.replace(".", ""))
        const idB = Number(b.arxiv.replace(".", ""))
        return idB - idA
    })

    // Group the pre-sorted publications by year
    const publicationsByYear = sortedPublishes.reduce(
        (acc, publish) => {
            const year = `20${publish.arxiv.slice(0, 2)}`
            if (!acc[year]) {
                acc[year] = []
            }
            acc[year].push(publish)
            return acc
        },
        {} as Record<string, PublishType[]>
    )

    // Get the sorted years (they will be in descending order from the pre-sorted array)
    const sortedYears = Object.keys(publicationsByYear).sort((a, b) => Number(b) - Number(a))

    let publicationCounter = 0
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={style.sectionSubText}>Paper Published</p>
                <h2 className={style.sectionHeadText}>Publications.</h2>
            </motion.div>

            <div className="mt-12 flex flex-col gap-10">
                {sortedYears.map((year) => (
                    <section key={year}>
                        <h3 className="text-gray-600 font-extrabold text-[24px] mb-6">{year}</h3>
                        <div className="flex flex-col gap-8">
                            {publicationsByYear[year].map((publish) => {
                                const currentIndex = publicationCounter++
                                return (
                                    <PublishCard
                                        key={`publish-${publish.arxiv}`}
                                        index={currentIndex}
                                        publish={publish}
                                    />
                                )
                            })}
                        </div>
                    </section>
                ))}
            </div>
        </>
    )
}

const Publish = SectionWrapper(NaivePublish, "publish")

export default Publish
