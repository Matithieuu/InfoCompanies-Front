import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { SocialMedia } from '../../../../data/types/company'
import LinkIcon from '../../../common/Icons/LinkIcon'

type TableCompanySocialProps = {
  socialMedia: SocialMedia
}

export default function TableCompanySocial({
  socialMedia,
}: TableCompanySocialProps) {
  return (
    <>
      {socialMedia.facebook && (
        <LinkIcon
          icon={<FacebookIcon />}
          style={{ color: '#3b5998' }}
          url={socialMedia.facebook}
        />
      )}
      {socialMedia.twitter && (
        <LinkIcon
          icon={<TwitterIcon />}
          style={{ color: '#1DA1F2' }}
          url={socialMedia.twitter}
        />
      )}
      {socialMedia.linkedin && (
        <LinkIcon
          icon={<LinkedInIcon />}
          style={{ color: '#0e76a8' }}
          url={socialMedia.linkedin}
        />
      )}
      {socialMedia.youtube && (
        <LinkIcon
          icon={<YouTubeIcon />}
          style={{ color: 'red' }}
          url={socialMedia.youtube}
        />
      )}
    </>
  )
}
