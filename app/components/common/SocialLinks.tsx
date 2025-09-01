import data from '@/public/data.json'
import CustomLink from '../ui/molecules/CustomLink';
import { GetIcon } from '../ui/Atoms/Icon';

export default function SocialLinks() {
    const homeSection = data.homeSection;

      function getIcon(iconName: string, className: string = '') {
        let icon = GetIcon(iconName, className, 24)
    
        if (icon === null) {
          icon = GetIcon('ExternalLink', className)
        }
        return icon;
    }
    
    return (
        <section
            aria-label="Social media links"
            className="flex justify-center gap-6 text-2xl text-gray-700 mt-6"
        >
            <address className="not-italic flex gap-6">
                {homeSection.content.links.length > 0 &&
                    (
                        homeSection.content.links.map(item => (
                            <CustomLink
                                key={item.name}
                                openNewTab={true}
                                href={item.link}
                                className='hover:text-blue-500'
                            >
                                {getIcon(item.name)}
                            </CustomLink>
                        ))
                    )}
            </address>
        </section>
    )
}