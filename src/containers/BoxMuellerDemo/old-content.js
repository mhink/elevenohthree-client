export const Title = () => {
  return (
    <section>
      <h1>Turning Bytes into Bell Curves</h1>
      <h3> Random Sampling: An Interactive Demo</h3>
    </section>
  )
}

export const Intro = () => {
  return (
    <section>
    </section>
  )
}
      %section#sampling-bytes
        %h3 Sampling Bytes
        #random-byte-samples

      %section#discrete-uniform

        #uniform-sample-rates

      %section#continuity
        %h3 Continuity
        %p Many useful distributions, including the normal, are continuous- that is to say, they are defined for every single real number. Since we can't represent the entirety of !{reals} on a <em>digital</em> computer, we're going to have to settle for an approximation.
        %p What we'll do here is interpret a sequence of four bytes as a 32-bit unsigned integer, then divide that integer by 2<sup>32</sup>.
        %aside
          %h4 Granularity
          %p You might very well recognize that we have a problem here if we assume that this is "continuous enough" for our needs. Suppose we let 
          .math
            %p 
              <strong>A</strong> = { <em>a</em> !{elem} !{reals} | 0 !{lte} <em>a</em> !{lte} 1, <em>a</em> is representable by a 32-bit float } 
            %p
              <strong>A'</strong> = { <em>a</em> !{elem} !{reals} | 0 !{lte} <em>a</em> !{lte} 1, <em>a</em> is <em>NOT</em> representable by a 32-bit float } 

            
          
        #transformed-uniform
      %section#bump
        %br
        %br
        %br
        %br
        %br
        %br
        %br
        %br
        %br
