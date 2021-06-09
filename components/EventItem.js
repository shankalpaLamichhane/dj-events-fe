import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/EventItem.module.css'
import styled from 'styled-components'

const StyledEventItem = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 20px 0;
padding: 13px;
box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.1);

@media (max-width: 600px) {
  flex-direction: column;
  text-align: center;
}`;

const StyledImage = styled.div`
flex: 1;
margin: 10px;
`;

const StyledInfo = styled.div`
flex: 2;

@media (max-width: 600px) {
  margin-bottom: 20px;
}
`;

export default function EventItem({ evt }) {
  return (
    <StyledEventItem>
      <StyledImage>
        <Image
          src={
            evt.image
              ? evt.image.formats.thumbnail.url
              : '/images/event-default.png'
          }
          width={170}
          height={100}
        />
      </StyledImage>

      <StyledInfo>
        <span>
          {new Date(evt.date).toLocaleDateString('en-US')} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </StyledInfo>

      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`}>
          <a className='btn'>Details</a>
        </Link>
      </div>
    </StyledEventItem>
  )
}
