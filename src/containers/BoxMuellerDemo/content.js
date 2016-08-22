import React from 'react'

export const Title = () => (
  <section>
    <h1>Turning Bytes into Bell Curves</h1>
    <h2>Random Sampling: An Interactive Demo</h2>
  </section>
)

export const Intro = () => (
    <section>
      <p>Of all my university classes, my favorites were the ones dealing with probability. Sure, other subjects turned out to be useful- but when, for instance, <a href="http://setosa.io/conditional/" target="_blank">Bayes' Theorem</a> finally clicked, it felt like <em>magic</em>.</p>
      <p>To my surprise, though, more than a few of my more traditional CS friends seem a bit mystified by the topic. Ask them to about custom memory managers, complicated graphics routines, or database query optimization and they'll go on for days- but if you bring up Monte Carlo methods, they glaze over and start thinking about James Bond playing baccarat!</p>
      <p>So for their sake, we're going to look at a basic topic that sits close to the intersection of computer science and statistics: drawing random samples from a normal distribution. There are several ways to do this, but we'll focus on three: inverse transform sampling, the Box-Mueller Transform, and the Ziggurat algorithm.</p>
    </section>
)

export const Sampling = ({children}) => (
  <section>
    <h3>Sampling Bytes</h3>
    <p>If we want to sample random numbers, we need a source of randomness. Luckily, I just so happen to have a stream of random bytes right here:</p>
    {children}
    <p>These values are sampled from the <a href="https://developer.mozilla.org/en-US/docs/Web/API/RandomSource/getRandomValues" target="_blank">Web Cryptography API</a>.  Throughout this article, this will be our only source of random numbers.</p>
  </section>
)

export const Discrete = ({children}) => (
  <section>
    <h3>Discrete, Indiscreet</h3>
    <p>Mathematically, the result of taking one sample of this stream is a random variable <span>𝐁 = 𝒰{"{0, 255}"}</span>. Accordingly, the probability of any particular outcome is <span>𝑓<sub>𝐁</sub> (b) = {"1/256"}</span>, or about <em>{"0.0039"}</em>.</p>
    <p>In order to get a better idea of what this means, the bar graph below shows all possible outcomes, with their relative rates of occurrence.  If our distribution of bytes is truly uniform, these bars should settle at {"0.39%"}.</p>
    {children}
  </section>
)
