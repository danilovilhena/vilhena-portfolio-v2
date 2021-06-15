import React from "react"
import debounce from "lodash.debounce"
import { navigate } from "gatsby-link"

const CardHolder = (props) => {
    const scrollablePostsRef = React.useRef({ current: {} })
    const [scrollPosition, setScrollPosition] = React.useState(0)
    const SCROLL_DEBOUNCE_MS_TIME = 20

    const onScroll = debounce(
        (event) => setScrollPosition(event.target.scrollLeft),
        SCROLL_DEBOUNCE_MS_TIME
    )

    const scrollTo = (action) => {
        const postWidth = scrollablePostsRef.current.childNodes[0].offsetWidth
        const scrollPosition = action === 'next'
        ? scrollablePostsRef.current.scrollLeft + postWidth
        : scrollablePostsRef.current.scrollLeft - postWidth

        scrollablePostsRef.current.scrollTo({
        behavior: 'smooth',
        left: scrollPosition,
        top: 0
        })
    }

    return (<>
        <div className="row row-cols-1 row-cols-md-3 g-4 card-holder" onScroll={onScroll} ref={scrollablePostsRef}>
        {props.obj.map((el, index) => { return (
            <Card obj={el} key={index}/>
        )})}
        </div>
        <ScrollButtons
            scrollTo={scrollTo}
            scrollPosition={scrollPosition}
            scrollPositionMaxWidth={scrollablePostsRef.current.scrollWidth - scrollablePostsRef.current.clientWidth}
        />
    </>)
}

const Card = (props) => {
    return (<div className="col" data-aos="fade-right">
        <div className="card h-100" role="button" onClick={() => navigate(props.obj.href)}>
            <img src={props.obj.image} className="card-img-top" alt={props.obj.title}></img>
            <div className="card-body">
                <h5 className="card-title">{props.obj.title}</h5>
                <p className="card-text">{props.obj.subtitle}</p>
            </div>
        </div>
    </div>)
}

const ScrollButtons = (props) => {
    const SCROLL_VISIBILITY_THRESHOLD = 1

    return (<div className="scroll-container">
        <button disabled={props.scrollPosition <= SCROLL_VISIBILITY_THRESHOLD} onClick={() => props.scrollTo('previous')}>
            <svg fill='#fafafa' height='24' width='24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M15.422 7.406L10.828 12l4.594 4.594L14.016 18l-6-6 6-6z' />
            </svg>
            <span>Anterior</span>
        </button>
        <button disabled={props.scrollPosition >= (props.scrollPositionMaxWidth - SCROLL_VISIBILITY_THRESHOLD)} onClick={() => props.scrollTo('next')}>
            <span>Próximo</span>
            <svg fill='#fafafa' height='24' width='24' xmlns='http://www.w3.org/2000/svg'>
                <path d='M9.984 6l6 6-6 6-1.406-1.406L13.172 12 8.578 7.406z' />
            </svg>
      </button>
    </div>)
}

export default CardHolder