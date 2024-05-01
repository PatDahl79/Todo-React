import React from 'react'
import './About.css'
import about from '../../assets/Todo.png'


const About = () => {
  return (
    <div id='about' className='about'>
                <h1>What To do lists can help you</h1>
                <p>Start your journey towards a more organized, focused, and empowered life today. 
                    Create your first to-do list and experience the difference it can make for your ADHD.</p>
        <div className="about-sections">
                <div className="about-left">
                    <img src={about} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <h2>Stay Organized</h2>
                        <p>With ADHD, staying organized can feel like an uphill battle. But fear not! A to-do list acts as your personal roadmap, 
                            guiding you through the day with clarity and purpose. Write down your tasks, prioritize them, and watch as chaos transforms into order.</p>
                    </div>
                    <div className="about-para">
                        <h2>Boost Focus</h2>
                            <p>Distractions lurk around every corner, threatening to derail your productivity. But armed with a to-do list, you gain a powerful weapon against distractions. 
                                Each task becomes a beacon, directing your focus and keeping you on track towards your goals.</p>
                    </div>
                    <div className="about-para">
                        <h2>Master Time Management</h2>
                            <p>Time can feel like both a friend and a foe for those with ADHD. But with a to-do list, you become the master of your own time.  
                                Break down daunting tasks into bite-sized chunks, allocate time slots, and watch as productivity soars.</p>
                    </div>
                    <div className="about-para">
                        <h2>Conquer Anxiety</h2>
                            <p>The constant buzz of thoughts and worries can leave you feeling overwhelmed.
                                Yet, a to-do list provides a sanctuary of calm amidst the chaos. Externalize your thoughts, release the burden of worry, and embrace a newfound sense of control.</p>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default About
