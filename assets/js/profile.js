function profile() {
    const btnUpdate = $('.user-info__button-update');
    const profile = {
        isUpdate: false,
        btnStatus: ['Cập nhật', 'Xác nhận']
    }

    btnUpdate.onclick = (e) => {
        e.preventDefault();

        if (!profile.isUpdate) {
            profile.isUpdate = true;
            e.target.innerText = profile.btnStatus[1];
        }
        else {
            profile.isUpdate = false;
            e.target.innerText = profile.btnStatus[0];

            toast({
                title: 'Thành công',
                message: 'Thông tin tài khoản đã được cập nhật'
            })
        }

        $$('.user-info__input').forEach((item) => {
            item.toggleAttribute('readonly');
        })

        $$('.user-info__radio').forEach((item) => {
            item.toggleAttribute('disabled');
        })
    }
}

profile();