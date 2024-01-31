import React from 'react'

const ProjectCard = ({ project: { title, desc, imgUrl, img_alt, url } }) => {
  const followLink = (link) => {
    console.log(link);
    window.location.href = link;
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-[200px]"
        src={imgUrl}
        alt={img_alt} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">
          {desc}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          className='bg-teal-500 hover:bg-teal-700
           text-white font-bold py-2 px-4 
           border border-teal-700 rounded'
          aria-label={title}
          onClick={() => followLink(`${url}`)}
        >
          View
        </button>
      </div>
    </div>
  )
}

export default ProjectCard
