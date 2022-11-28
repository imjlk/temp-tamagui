import className from 'classnames/bind';
import styles from './ContentWrapper.module.scss';
import { MyComponent } from '@my/ui';
// import { HomeScreen } from 'app/features/home/screen'

let cx = className.bind(styles);

export default function ContentWrapper({ content, children }) {
  return (
    <article className={cx('component')}>
      <div dangerouslySetInnerHTML={{ __html: content ?? '' }} />
      {children}
      {/* <MyComponent w={50} h={50} blue /> */}
      {/* <HomeScreen /> */}
    </article>
  );
}
