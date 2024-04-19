import React, { useRef } from 'react';

const RefWithHooksComponent = () => {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <h2>RefWithHooksComponent</h2>

      <section ref={section1Ref}>
        <h3>Section 1</h3>
        <p>Content of Section 1</p>
      </section>

      <section ref={section2Ref}>
        <h3>Section 2</h3>
        <p>Content of Section 2</p>
      </section>

      <div>
        <button onClick={() => scrollToSection(section1Ref)}>Scroll to Section 1</button>
        <button onClick={() => scrollToSection(section2Ref)}>Scroll to Section 2</button>
      </div>
    </div>
  );
};

export default RefWithHooksComponent;
