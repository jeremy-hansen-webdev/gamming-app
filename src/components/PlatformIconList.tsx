import type { IconType } from 'react-icons';
import type { Platform } from '../hooks/useGames';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android: FaAndroid,
  };

  return (
    <div className="flex justify-end gap-2">
      {platforms.map((platform) => {
        const IconComponent = iconMap[platform.slug];
        return (
          IconComponent && (
            <IconComponent
              key={platform.id}
              className="text-zinc-600 dark:text-zinc-500 mt-1.5"
              size={20}
            />
          )
        );
      })}
    </div>
  );
};

export default PlatformIconList;
