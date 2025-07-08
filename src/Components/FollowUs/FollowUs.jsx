

const FollowUs = () => {

    const followers = [
        {
            id: 1,
            image: '/followers/follow_1.png',
            width: '320',
            height: '308',
        },
        {
            id: 2,
            image: '/followers/follow_2.png',
            width: '256',
            height: '380',
        },
        {
            id: 3,
            image: '/followers/follow_3.png',
            width: '256',
            height: '308',
        },
        {
            id: 4,
            image: '/followers/follow_4.png',
            width: '256',
            height: '380',
        },
        {
            id: 5,
            image: '/followers/follow_5.png',
            width: '256',
            height: '308',
        },
        {
            id: 6,
            image: '/followers/follow_6.png',
            width: '256',
            height: '380',
        },
        {
            id: 7,
            image: '/followers/follow_7.png',
            width: '256',
            height: '308',
        },

    ]

    return (
        <div className='w-full pb-[150px]'>

            {/* header title  */}
            <div className='w-full flex flex-col items-center mb-[80px]'>
                <h3 className='text-5xl text-[#484848] font-normal capitalize mb-5'>follow us on instagram</h3>
                <p className='text-base text-[#8a8a8a] font-poppins font-normal max-w-[614px] w-full'>Love your new look? Wed love to see how you style it! 
Follow us on Instagram [@YoungForLife] and tag your outfits with #YoungForLifeStyle to join our fashion fam.
Your vibe inspires our tribe — lets grow this style community together!</p>
            </div>

        
        </div>
    );
};

export default FollowUs;