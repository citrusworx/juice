function SingleColumn(){
    const container = document.createElement('div');
    const table = document.createElement('table');
    const demo_option_content = 'Demo option';
    const demo_option_two_content = 'Demo option';
    const demo_option_three_content = 'Demo option';
    const benefits = [demo_option_content, demo_option_two_content, demo_option_three_content];

    // Iterate Benefits
    for(let index = 0; index < benefits.length; index++){
        const trow = document.createElement('tr');
        const tdata = document.createElement('td');
        const icon = document.createElement('i');
        icon.classList.add('mat');
        icon.classList.add('checkbox');
        icon.classList.add('icon:ocean');
        icon.classList.add('::md');
        tdata.append(icon);
        tdata.append(benefits[index]);
        trow.appendChild(tdata);
        table.appendChild(trow);

    }
    container.append(table);
    return container;

}

exports.SingleColumn = SingleColumn();
