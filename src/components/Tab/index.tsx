import React, {FC, useState} from 'react';
import './style.css';

interface Props {
  click?: boolean;
  onClick?: () => void;
}

const Tab: FC<Props> = () => {
  const [tab, setTab] = useState(1);

  const toggle = (index) => {
    setTab(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={tab === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggle(1)}
        >
          Tab 1
        </button>
        <button
          className={tab === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggle(2)}
        >
          Tab 2
        </button>
        <button
          className={tab === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggle(3)}
        >
          Tab 3
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={tab === 1 ? "content  active-content" : "content"}
        >
          <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum
          </p>
        </div>

        <div
          className={tab === 2 ? "content  active-content" : "content"}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor
          </p>
        </div>

        <div
          className={tab === 3 ? "content  active-content" : "content"}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet
          </p>
        </div>
      </div>
    </div>
  );
}

export default Tab;