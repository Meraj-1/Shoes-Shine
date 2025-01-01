import React from 'react'

const Article = () => {
  return (
       <div className='grid lg:grid-cols-2 md:px-20 md:py-10 sm:grid-cols-1 gap-8 p-10'>
        <div className='flex py-0 px-10'>
          <h2 className='text-2xl font-bold text-gray-800 mb-4'></h2>
          <p className='text-gray-600 leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed scelerisque, nunc vel semper suscipit, nunc neque viverra ex, vel condimentum velit dolor sit amet nunc. Sed auctor, velit vel ultrices posuere, dolor nunc aliquet sapien, at pellentesque ligula est id turpis. Sed vitae velit nec neque tristique faucibus. Donec viverra, felis ac tempor placerat, mauris lectus bibendum arcu, non ultricies ex nisi in  Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium aliquid, ratione id error maiores repellendus enim doloremque, harum quibusdam eum voluptatibus nihil ullam nisi blanditiis temporibus qui, magni possimus asperiores?
            Similique repellendus modi psum obcaecati voluptatum repudiandae quasi accusantium. Id voluptate quam maiores nemo laborum magni nobis voluptatem aliquid nisi ullam?
            Iusto, veniam. Exercitationem nostrum vero minus adipisci quam cumque quas ad accusantium alias officiis, explicabo reiciendis, praesentium quaerat vel. Sint, dolores. Omnis quidem magnam unde quis consequuntur, magni quibusdam tempora.
          </p>
        </div>
        <div>
            <img className='w-10% py-0 px-10 body-cover' src="https://images.pexels.com/photos/786003/pexels-photo-786003.jpeg?cs=srgb&dl=pexels-pluyar-786003.jpg&fm=jpg"  alt="" />
        </div>
       </div>
  )
}

export default Article;