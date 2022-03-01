import React from 'react'

const Dropdown_height = ({ handleChangeCallback, height }) => {

    const handleChange = (e) => {
        handleChangeCallback(e.target.value);
    }
    return (
        <div>
            <input className='height_op' type="number" onChange={handleChange}
                placeholder="150"
                min="150" max="250" />

            {/* <select onChange={handleChange} className='height_op' defaultValue={height}>

                <option value="150">1,50</option>
                <option value="151">1,51</option>
                <option value="152">1,52</option>
                <option value="153">1,53</option>
                <option value="154">1,54</option>
                <option value="155">1,55</option>
                <option value="156">1,56</option>
                <option value="157">1,57</option>
                <option value="158">1,58</option>
                <option value="159">1,59</option>
                <option value="160">1,60</option>
                <option value="161">1,61</option>
                <option value="162">1,62</option>
                <option value="163">1,63</option>
                <option value="164">1,64</option>
                <option value="165">1,65</option>
                <option value="166">1,66</option>
                <option value="167">1,67</option>
                <option value="168">1,68</option>
                <option value="169">1,69</option>
                <option value="170">1,70</option>
                <option value="171">1,71</option>
                <option value="172">1,72</option>
                <option value="173">1,73</option>
                <option value="174">1,74</option>
                <option value="175">1,75</option>
                <option value="176">1,76</option>
                <option value="177">1,77</option>
                <option value="178">1,78</option>
                <option value="179">1,79</option>
                <option value="180">1,80</option>
                <option value="181">1,81</option>
                <option value="182">1,82</option>
                <option value="183">1,83</option>
                <option value="184">1,84</option>
                <option value="185">1,85</option>
                <option value="186">1,86</option>
                <option value="187">1,87</option>
                <option value="188">1,88</option>
                <option value="189">1,89</option>
                <option value="190">1,90</option>
                <option value="191">1,91</option>
                <option value="192">1,92</option>
                <option value="193">1,93</option>
                <option value="194">1,94</option>
                <option value="195">1,95</option>
                <option value="196">1,96</option>
                <option value="197">1,97</option>
                <option value="198">1,98</option>
                <option value="199">1,99</option>
                <option value="200">2,00</option>
                <option value="201">2,01</option>
                <option value="202">2,02</option>
                <option value="203">2,03</option>
                <option value="204">2,04</option>
                <option value="205">2,05</option>
                <option value="206">2,06</option>
                <option value="207">2,07</option>
                <option value="208">2,08</option>
                <option value="209">2,09</option>
                <option value="210">2,10</option>
                <option value="211">2,11</option>
                <option value="212">2,12</option>
                <option value="213">2,13</option>
                <option value="214">2,14</option>
                <option value="215">2,15</option>
                <option value="216">2,16</option>
                <option value="217">2,17</option>
                <option value="218">2,18</option>
                <option value="219">2,19</option>
                <option value="220">2,20</option>
                <option value="221">2,21</option>
                <option value="222">2,22</option>
                <option value="223">2,23</option>
                <option value="224">2,24</option>

            </select> */}
        </div>
    )
}

export default Dropdown_height
