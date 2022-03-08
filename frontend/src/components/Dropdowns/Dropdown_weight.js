import React from 'react'

const Dropdown_weight = ({ handleChangeCallback, weight }) => {
    const handleChange = (e) => {
        handleChangeCallback(e.target.value);
    }
    return (
        <div>
        <input className='height_op' type="number" onChange={handleChange}
        defaultValue={weight} min="50" max="120" placeholder="50"/>

            {/* <select onChange={handleChange} className='height_op' defaultValue={weight}>

                <option value="50">50</option>
                <option value="51">51</option>
                <option value="52">52</option>
                <option value="53">53</option>
                <option value="54">54</option>
                <option value="55">55</option>
                <option value="56">56</option>
                <option value="57">57</option>
                <option value="58">58</option>
                <option value="59">59</option>
                <option value="60">60</option>
                <option value="61">61</option>
                <option value="62">62</option>
                <option value="63">63</option>
                <option value="64">64</option>
                <option value="65">65</option>
                <option value="66">66</option>
                <option value="67">67</option>
                <option value="68">68</option>
                <option value="69">69</option>
                <option value="70">70</option>
                <option value="71">71</option>
                <option value="72">72</option>
                <option value="73">73</option>
                <option value="74">74</option>
                <option value="75">75</option>
                <option value="76">76</option>
                <option value="77">77</option>
                <option value="78">78</option>
                <option value="79">79</option>
                <option value="80">80</option>
                <option value="81">81</option>
                <option value="82">82</option>
                <option value="83">83</option>
                <option value="84">84</option>
                <option value="85">85</option>
                <option value="86">86</option>
                <option value="87">87</option>
                <option value="88">88</option>
                <option value="89">89</option>
                <option value="90">90</option>
                <option value="91">91</option>
                <option value="92">92</option>
                <option value="93">93</option>
                <option value="94">94</option>
                <option value="95">95</option>
                <option value="96">96</option>
                <option value="97">97</option>
                <option value="98">98</option>
                <option value="99">99</option>
                <option value="100">100</option>
                <option value="101">101</option>
                <option value="102">102</option>
                <option value="103">103</option>
                <option value="104">104</option>
                <option value="105">105</option>
                <option value="106">106</option>
                <option value="107">107</option>
                <option value="108">108</option>
                <option value="109">109</option>
                <option value="110">110</option>
                <option value="111">111</option>
                <option value="112">112</option>
                <option value="113">113</option>
                <option value="114">114</option>
                <option value="115">115</option>
                <option value="116">116</option>
                <option value="117">117</option>
                <option value="118">118</option>
                <option value="119">119</option>
                <option value="120">120</option>
                <option value="121">121</option>
                <option value="122">122</option>
                <option value="123">123</option>
                <option value="124">124</option>
            </select> */}
        </div>
    )
}

export default Dropdown_weight
