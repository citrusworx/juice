function Footer(){
    //Create 3 column footer
    //Footer
    const container = document.createElement('footer');
    //Row
    const row = document.createElement('div');
    //Columns
    //Col One
    const col1 = document.createElement('div');
    const col1_content = document.createElement('p');
    //Col Two
    const col2 = document.createElement('div');
    const col2_content = document.createElement('p');
    //Col Three
    const col3 = document.createElement('div');
    const col3_content = document.createElement('p');
    
    //Combine elements into arrays
    const cols = [col1, col2, col3];
    const content = [col1_content, col2_content, col3_content];

    //Add content
    col1_content.textContent = 'Text';
    col2_content.textContent = 'Text';
    col3_content.textContent = 'Text';

    //Append Content to Columns
    for(let index = 0; index < content.length; index++){
        cols[index].append(content[index]);
    }
    //Append Columns to Row
    for(let index = 0; index < cols.length; index++){
        cols[index].classList.add('col');
        row.append(cols[index]);
    }
    //Append Row to Footer
    container.append(row);
    //Styles
    //Row
    row.classList.add('w-full');
    row.classList.add('flex');
    row.classList.add('even');
    row.classList.add('text-white');
    //Footer (Container)
    container.classList.add('bg-sunset');
    container.classList.add('h-45');
    container.classList.add('w-full');
    container.classList.add('back');
    container.classList.add('anim:bg:alive');
    
    
    
    
    
    //Return footer
    return container;
}

exports.Footer = Footer();